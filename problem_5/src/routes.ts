import express from 'express';
import {
    createResource,
    listResources,
    getResource,
    updateResource,
    deleteResource
} from './resourceController';

export const resourceRoutes = express.Router();

resourceRoutes.post('/', createResource);
resourceRoutes.get('/', listResources);
resourceRoutes.get('/:id', getResource);
resourceRoutes.put('/:id', updateResource);
resourceRoutes.delete('/:id', deleteResource);
