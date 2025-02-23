# Why structure component folders this way?

## TLDR
Hoisting data fetching to the server requires some annoying conventions.

[This is a convention](#convention-code-example) I use to achieve this. (link to bottom of document)

Why use this convention or fetch data on the server in the first place?
- Prevent waterfalls of fetch on renders slowing down performance
- Make it obvious when a server component is being used and prevent accidental injection of a client component

## Example Folder Structure
components/\
|--ui/\
|--ComponentA/\
|----utils/\
|------ButtonA.tsx\
|------ListA.tsx\
|----index.tsx\
|--ComponentB/\
|----utils/\
|------ButtonB.tsx\
|------ListB.tsx\
|----index.tsx

The goal is to avoid making any component in the top level of a "composite" component directory a client component.\
Let me repeat that: NO CLIENT COMPONENTS IN THE TOP LEVEL OF A COMPONENT DIRECTORY.
There are many reasons to avoid making a "top level" component a client component.

1. Prevent imports of server components into client components

   This mutates server components into a client component (thus nuking the benefits we could get from them being server components).

2. We can use this convention to remove or drive a waterfall of fetch on renders as low as possible.

   If we have a bunch of nested client components and each one has a fetch inside the component, causing a "fetch on render", it causes a waterfall where we render, fetch data, render the children, fetch data for the newly rendered children, render again, then see if we have any more child components that require a fetch to properly render, and so forth.

YES, colocation of data fetching and components is awesome. It makes DX nice. I like to look at files where I can see everything and type out related functionality. I like importing a component and having everything work. No need to write more data fetching logic. Just import and use.

So, how can we try to achieve decent DX and load data on the server? Well, let's add another convention to the list. When we don't feel like following the convention, let's suck it up and do it. When we forget the convention... let's not. But when it does happen (it will happen), having the convention helps us identify mishaps. Recognizing convention deviation is "more glanceable" than figuring out what must be refactored for performance. If performance is bad where we need it to be better, or need some SEO optimization, we can quickly fix the code to follow the convention without the need to come up with a new pattern.

## The Convention

Condition:

A component that:
1.  Requires fetched data
2.  Has to be a client component

Directive:
- Wrap client components with data fetching server components that can load all of the data and send it down in one round trip.
- If you need to use a server component as a child of the client component, pass the component using the 'children' prop in the client component.

### But why ???
#### fetching in server:
This has been covered. Go back and re-read things. Give a quick google (or perplexity) to things you are not familiar with.
#### children prop pattern:
What makes a component a client component in next.js is:
- the 'use client' directive at the top of a file
- importing into and direct use in a client component

When components are passed through a client component as children, they can remain server components.

## Convention Code Example

components/\
|--ui/\
|--ServerComponent/\
|----utils/\
|------Child.tsx\
|------OtherChild.tsx\
|------ClientComponent.tsx\
|----index.tsx

```ts
// ClientComponent.tsx
"use client";

const ClientComponent = ({
	...props
}: {
	data: type;
	className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={`${props.className}`}>
            <Child data={props.data}/>
            <OtherChild data={props.data}/>
            {props.children}
        </>
    );
};

export default ClientComponent
```
```ts
// index.tsx
import ClientComponent from "./utils/ClientComponent";

async function getData() {
	try {
		// fetch data ...
		return data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
}

async function ClientContentWrapper() {
	try {
		const data = await getData();
		if (!data || data.length === 0) {
			return <div>No Data Found.</div>;
		}
		return <ClientContent data={data} />;
	} catch (error) {
		return (
			<div className="text-red-500 p-4" role="alert">
				<h2 className="text-lg font-bold">Something went wrong:</h2>
				<p>
					{error instanceof Error
						? error.message
						: "An unexpected error occurred"}
				</p>
			</div>
		);
	}
}

// ADD YOUR CLIENT COMPONENT HERE
const ClientContent = ({ ...props }: { data: Type }) => {
    return (
	    <ClientComponent data={props.data}>
		    <ServerComponentChild />
        </ClientComponent>;
    )
};

const ServerComponent = ({ ...props }: { className?: string }) => {
	return (
		<div className={`${props.className}`}>
			<Suspense
				fallback={
					<div aria-live="polite" aria-busy="true">
						Loading...
					</div>
				}
			>
				<ClientContentWrapper />
			</Suspense>
		</div>
	);
};
```
