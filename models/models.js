import pool from "../db/index.js";

export async function getProfiles() {
    const res = await pool.query(
        `SELECT * FROM profile;`
    );
    return res.rows;
}

export async function getProfileByUserId(id) {
    const res = await pool.query(
        `SELECT * FROM profile WHERE userID = $1;`,
        [id]
    );
    return res.rows;
}

export async function getNotes() {
    const res = await pool.query(
        `SELECT * FROM notes;`
    );
    return res.rows;
}

export async function getNotesByNotesID(id) {
    const res = await pool.query(
        `SELECT * FROM notes WHERE notesID = $1;`,
        [id]
    );
    return res.rows;
}
// Need to double check the SQL syntax to see if this is correct
export async function getNotesByTag(searchTerm) {
    const res = await pool.query(
        `SELECT * FROM notes WHERE LOWER(tags) LIKE LOWER('%' || $1 || '%');`,
        [searchTerm]
    );
    return res.rows;
}

export async function getHelp() {
    const res = await pool.query(
        `SELECT * FROM help;`
    );
    return res.rows;
}

export async function getHelpByHelpID(id) {
    const res = await pool.query(
        `SELECT * FROM help WHERE helpID = $1;`,
        [id]
    );
    return res.rows;
}

export async function getResource() {
    const res = await pool.query(
        `SELECT * FROM resource;`
    );
    return res.rows;
}
// Need to double check the SQL syntax to see if this is correct
export async function getResourceByTag(searchTerm) {
    const res = await pool.query(
        `SELECT * FROM resource WHERE LOWER(tags) LIKE LOWER('%' || $1 || '%');`,
        [searchTerm]
    );
}

export async function getTopic() {
    const res = await pool.query(
        `SELECT * FROM topic;`
    );
    return res.rows;
}

export async function getTopicById(id) {
    const res = await pool.query(
        `SELECT * FROM topic WHERE topicID = $1;`,
        [id]
    );
    return res.rows;
}
// Need to double check the SQL syntax to see if this is correct 
export async function getTopicByTag(searchTerm) {
    const res = await pool.query(
        `SELECT *FROM topic WHERE LOWER(tags) LIKE LOWER('%' || $1 || '%');`,
        [searchTerm]
    );
    return res.rows;
}

// Need to double check if we need the below models or not - Delete if needed from models & routers

// Need to double check the SQL syntax to see if this is correct
export async function createProfile(newProfile) {
    const res = await pool.query(
        `INSERT INTO profile (userID, email, slackUsername) VALUES ($1, $2, $3) RETURNING *;`
        [newProfile.userID, newProfile.email, newProfile.slackUsername]
    );
    return res.rows;
}
// Need to double check the SQL syntax to see if this is correct
export async function updateProfileByUserId(id, updatedProfile) {
    const res = await pool.query(
        `UPDATE profile SET
            slakUsername = $1
        WHERE userID = $2 RETURNING *;`,
        [updatedProfile.slackUsername, id]
    );
    return res.rows;
}
// Need to double check the SQL syntax to see if this is correct
export async function deleteProfileByUserId(id) {
    const res = await pool.query(
        `DELETE FROM profile WHERE userID = $1 RETURNING *;`,
        [id]
    );
    return res.rows;
}