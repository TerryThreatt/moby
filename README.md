# Moby

Moby is a book review app that allows you to add new books and review each book. This project was setup by created a new Rails API on the backend and serving data up to a Vanilla Javascript frontend. 

### Getting Started

Here is a step-by-step guide to get the project started. 

clone the project:
```
$ git clone 'git@github.com:TerryThreatt/moby.git'
```

navigate to the backend: 

```
$ cd backend
```

load project dependencies: 

```
$ bundle install 
```

create database: 

```
$ rake db:create
```

migrate tables: 

```
$ rake db:migrate
```

start with some book seed data: 

```
$ rake db:seed 
```

start up a server: 

```
$ rails s
```

get started with the frontend: 

```
$ open index.html 
```


## Built With

* [Rails](https://rubyonrails.org/) - The web framework used
* [PostgreSQL](https://www.postgresql.org/) - Database management system with ActiveRecord 
* [Active Record Serializers](https://github.com/rails-api/active_model_serializers) - Data serializer with ActiveRecord 
* [Materialize CSS](https://materializecss.com/) - Frontend CSS framework 

## Versioning

This is V1 for the book review Rails API. 


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
