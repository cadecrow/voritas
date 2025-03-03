import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const jsonFilePath = path.join(process.cwd(), 'public', 'data', 'dummybooks.json');
    const jsonData = await fs.readFile(jsonFilePath, 'utf-8');
    const data = JSON.parse(jsonData);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load JSON data' }, { status: 500 });
  }
}