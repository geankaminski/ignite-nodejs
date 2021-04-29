const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };
  repositories.push(repository)
  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;
  
  repositoryIndex = repositories.findIndex(repository => repository.id === id);
  if (repositoryIndex === -1) {
    return response.status(404).json({ error: "Repository not found" });
  }
  if(title){
    repositories[repositoryIndex].title = title
  }
  if(url){
    repositories[repositoryIndex].url = url
  }
  if(techs){
    repositories[repositoryIndex].techs = techs
  }

  return response.json(repositories[repositoryIndex]);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  repositoryIndex = repositories.findIndex(repository => repository.id === id);
  if (repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  }
  repositories.splice(repositoryIndex, 1);
  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  repositoryIndex = repositories.findIndex(repository => repository.id === id);
  if (repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  }
  ++repositories[repositoryIndex].likes
  return response.status(200).json({likes: repositories[repositoryIndex].likes});
});

module.exports = app;
