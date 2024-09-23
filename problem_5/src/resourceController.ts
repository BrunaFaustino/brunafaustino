import { Request, Response } from 'express';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const getDbConnection = async () => {
    return await open({
        filename: './database.db',
        driver: sqlite3.Database
    });
};

export const createResource = async (req: Request, res: Response) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ error: "Name and description are required" });
    }

    const db = await getDbConnection();
    try {
        const result = await db.run('INSERT INTO resources (name, description) VALUES (?, ?)', [name, description]);
        res.json({ id: result.lastID, name, description });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const listResources = async (req: Request, res: Response) => {
    const db = await getDbConnection();
    const resources = await db.all('SELECT * FROM resources');
    res.json(resources);
};

export const getResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    const db = await getDbConnection();
    const resource = await db.get('SELECT * FROM resources WHERE id = ?', [id]);
    res.json(resource);
};

export const updateResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const db = await getDbConnection();
    await db.run('UPDATE resources SET name = ?, description = ? WHERE id = ?', [name, description, id]);
    res.json({ id, name, description });
};

export const deleteResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    const db = await getDbConnection();
    await db.run('DELETE FROM resources WHERE id = ?', [id]);
    res.json({ message: 'Resource deleted' });
};
