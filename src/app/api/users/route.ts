// import db from '@/lib/db';
import { db } from '@/db/statements';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const data = db.prepare('SELECT * FROM users').all();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, category, link, pitch } = await request.json();

    const sql = `
      INSERT INTO users (title, description, category, link, pitch)
      VALUES (?, ?, ?, ?, ?);
    `;

    db.prepare(sql).run(title, description, category, link, pitch);
    return NextResponse.json({ message: 'Data inserted successfully.' });
  } catch (error) {
	console.log(error, "error")
    return NextResponse.json(
      { error: 'Failed to insert data', details: error },
      { status: 500 }
    );
  }
}