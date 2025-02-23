# Why structure component folders this way?

<!-- TODO -->

components/\
|--ui/\
|--composite/\
|--|--utils/\
|--|--|--composite-component/\
|--|--|--|--composite-component-button.tsx\
|--|--composite-component.tsx

The goal is to avoid making any component in the "composite" directory a client component.\
Let me repeat that: NO CLIENT COMPONENTS IN THE COMPOSITE DIRECTORY.
There are many reasons to avoid making a "top level" component a client component.
What we are primarly looking to do here is prevent a waterfall of fetch on renders.\
- If we have a bunch of nested client components and each one has a fetch, causing a "fetch on render", it causes a waterfall where we render, fetch data, render, then have to fetch data for the newly rendered child component, then render again, then see if we have any new child components that require a fetch to properly render. 
That sentence was long and annoying. Your client finds the loading process even more annoying. Do not make a waterfall of fetch on renders. 

Make you client components as low level as possible. 

If you have a composite component that has to be a client component, make sure you wrap client components with data fetching server components that can load all of the data and send it down in one round trip. 

example:
```
"use client";


export default const ClientComposite = () => {
    return (
        <>
            <ChildWrapper/>
            <OtherChildWrapper/>
        </>
    );
};
```