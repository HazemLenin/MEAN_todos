# MEAN todos app
todos app made with mean stack.

## Technologies used
- MongoDB
- ExpressJS
- Angular
- NodeJS

## Start it on local machine
First clone this repository
```cmd
git clone https://github.com/HazemLenin/MEAN_todos.git
```

Start Mongo database and put the database uri in the env file in the backend folder
```
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4
```

Install dependencies and start backend
```cmd
cd backend
npm i
npm start
```

go to frontend and start it
```cmd
cd frontend
ng serve -o
```

And voila!