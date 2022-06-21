import express from 'express';
export const router = express.Router();
import {
  getProfiles,
  getProfileByUserId,
  getNotes,
  getNotesByNotesID,
  getNotesByTag,
  getHelp,
  getHelpByHelpID,
  getResource,
  getResourceByTag,
  getTopic,
  getTopicById,
  getTopicByTag,
  createProfile,
  updateProfileByUserId,
  deleteProfileByUserId,
  getResourceByTopic,
} from '../models/models.js';

// BASIC APP FUNCTIONALITY ROUTES:

// Router to get all users
router.get('/users', async function (req, res) {
  const allUsers = await getProfiles();
  const responseObject = {
    success: true,
    message: 'All users',
    data: allUsers,
  };
  res.json(responseObject);
});

router.get('/users/:id', async function (req, res) {
  const user = await getProfileByUserId(req.params.id);
  const responseObject = {
    success: true,
    message: 'Here is the user you searched for',
    data: user,
  };
  res.json(responseObject);
});

router.get('/notes', async function (req, res) {
  const allNotes = await getNotes();
  const responseObject = {
    success: true,
    messgae: 'All notes',
    data: allNotes,
  };
  res.json(responseObject);
});

router.get('/notes/:id', async function (req, res) {
  const note = await getNotesByNotesID(req.params.id);
  const responseObject = {
    success: true,
    message: 'Here is the note you searched for',
    data: note,
  };
  res.json(responseObject);
});

// Need to figure out how to connect the searched tag to the notes URL path (Use this website for guidance - https://reactgo.com/react-router-query-params/#:~:text=To%20access%20the%20query%20params%20from%20a%20url%2C,above%20examples%20we%20have%20used%20the%20URLSearchParams%20interface.)
router.get('/notes?key=value', async function (req, res) {
  const searchTerm = req.query.tags;
  if (searchTerm !== undefined) {
    const searchedNote = await getNotesByTag(searchTerm);
    const responseObject = {
      success: true,
      message: 'Notes matching your search term',
      data: searchedNote,
    };
    res.json(responseObject);
  }
});

// Need to figure out how to connect the searched tag to the notes URL path (Use this website for guidance - https://reactgo.com/react-router-query-params/#:~:text=To%20access%20the%20query%20params%20from%20a%20url%2C,above%20examples%20we%20have%20used%20the%20URLSearchParams%20interface.)
router.get('/resource?key=value', async function (req, res) {
  const searchTerm = req.query.tags;
  if (searchTerm !== undefined) {
    const searchedResource = await getResourceByTag(searchTerm);
    const responseObject = {
      success: true,
      message: 'Resources matching your searched term',
      data: searchedResource,
    };
    res.json(responseObject);
  }
});

router.get('/resource/:id', async function (req, res) {
  const searchedResource = await getResourceByTopic(req.params.id);
  const responseObject = {
    success: true,
    message: 'Resources matching your searched term',
    data: searchedResource,
  };
  res.json(responseObject);
});

router.get('/topic', async function (req, res) {
  const allTopics = await getTopic();
  const responseObject = {
    success: true,
    message: 'All topics',
    data: allTopics,
  };
  res.json(responseObject);
});

router.get('/topic/:id', async function (req, res) {
  const topic = await getTopicById(req.params.id);
  const responseObject = {
    success: true,
    message: 'Here is the topic that you searched for',
    data: topic,
  };
  res.json(responseObject);
});

// Need to figure out how to connect the searched tag to the notes URL path (Use this website for guidance - https://reactgo.com/react-router-query-params/#:~:text=To%20access%20the%20query%20params%20from%20a%20url%2C,above%20examples%20we%20have%20used%20the%20URLSearchParams%20interface.)
router.get('/topic?key=value', async function (req, res) {
  const searchTerm = req.query.tags;
  if (searchTerm !== undefined) {
    const searchedTopic = await getTopicByTag(searchTerm);
    const responseObject = {
      success: true,
      message: 'Topics matching your searched term',
      data: searchedTopic,
    };
    res.json(responseObject);
  }
});

// ROUTES TO DECIDE WHETHER TO IMPLEMENT:

router.get('/help', async function (req, res) {
  const allHelp = await getHelp();
  const responseObject = {
    success: true,
    message: 'Here is everyone who is willing to help',
    data: allHelp,
  };
  res.json(responseObject);
});

router.get('/help/:id', async function (req, res) {
  const help = await getHelpByHelpID(req.params.id);
  const responseObject = {
    success: true,
    message: 'Here is the helpful user you searched for',
    data: help,
  };
  res.json(responseObject);
});

router.get('/resource', async function (req, res) {
  const allResources = await getResource();
  const responseObject = {
    success: true,
    message: 'All resources',
    data: allResources,
  };
  res.json(responseObject);
});

// Create, Update & Delete routes:

// Create a new user
router.post('/users', async function (req, res) {
  const newUser = await createProfile(req.body);
  const responseObject = {
    success: true,
    message: 'New user created',
    data: newUser,
  };
  res.json(responseObject);
});

// Update a users details (Need to make a "/profile" root maybe??)
router.put('/:id', async function (req, res) {
  const updatedUser = await updateProfileByUserId(req.params.id, req.body);
  const responseObject = {
    success: true,
    message: 'Updated user details successfully',
    data: updatedUser,
  };
  res.json(responseObject);
});

// Delete a user by id
router.delete('/:id', async function (req, res) {
  const deletedUser = await deleteProfileByUserId(req.params.id);
  const responseObject = {
    success: true,
    message: 'Deleted user details successfully',
    data: deletedUser,
  };
  res.json(responseObject);
});

router.get('/', async function (req, res) {
  const profileData = req.params.id;
});

export default router;
