CREATE TABLE jobs (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    pay INTEGER NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL,
    primary_tag TEXT NOT NULL,
    color TEXT NOT NULL,
);

CREATE TABLE subscribers (
    email TEXT NOT NULL PRIMARY KEY,
);

//
insert into jobs (name, pay, description, link, primary_tag, color) values (
    'Developer',
    '$10',
    'Developing software',
    'https://www.google.com',
    'Developer',
    '#ff0000'
);
