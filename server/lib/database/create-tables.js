const Database = require('./Database.js');

const createTables = async () => {
  const db = new Database();

  await db.query(`CREATE TABLE users(
    id SERIAL,
    first_name varchar (255),
    last_name varchar (255),
    password varchar (255),
    type varchar (255),
    PRIMARY KEY (id)
  );`);

  await db.query(`CREATE TABLE visitors(
    id SERIAL,
    user_id int,
    first_name varchar (255),
    last_name varchar (255),
    phone_number varchar (255),
    type varchar (255),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
      REFERENCES users (id)
      ON DELETE CASCADE
  );`);

  await db.query(`CREATE TABLE locations(
    id SERIAL,
    user_id int,
    address varchar (255),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
      REFERENCES users (id)
      ON DELETE CASCADE
  );`);

  await db.query(`CREATE TABLE parking_spots(
    id SERIAL,
    location_id int,
    number varchar (255),
    neighbors varchar (255),
    is_blocked boolean,
    coordinates varchar (255),
    PRIMARY KEY (id),
    FOREIGN KEY (location_id)
      REFERENCES locations (id)
      ON DELETE CASCADE
  );`);

  await db.query(`CREATE TABLE licenses(
    id SERIAL,
    visitor_id int,
    license_number varchar (255),
    license_state varchar (255),
    PRIMARY KEY (id),
    FOREIGN KEY (visitor_id)
      REFERENCES visitors (id)
      ON DELETE CASCADE
  );`);

  await db.query(`CREATE TABLE vehicles(
    id SERIAL,
    visitor_id int,
    make varchar (255),
    model varchar (255),
    color varchar (255),
    details varchar (255),
    PRIMARY KEY (id),
    FOREIGN KEY (visitor_id)
      REFERENCES visitors (id)
      ON DELETE CASCADE
  );`);

  await db.query(`CREATE TABLE visits(
    id SERIAL,
    visitor_id int,
    parking_spot_id int,
    visit_status varchar (255),
    date timestamp,
    tag_number varchar (255),
    details varchar (255),
    PRIMARY KEY (id),
    FOREIGN KEY (visitor_id)
      REFERENCES visitors (id)
      ON DELETE CASCADE,
    FOREIGN KEY (parking_spot_id)
      REFERENCES parking_spots (id)
      ON DELETE CASCADE
  );`);

  await db.query(`CREATE TABLE payments(
    id SERIAL,
    visit_id int,
    status varchar (255),
    type varchar (255),
    amount real,
    PRIMARY KEY (id),
    FOREIGN KEY (visit_id)
      REFERENCES visits (id)
      ON DELETE CASCADE
  );`);

  await db.query(`CREATE TABLE damages(
    id SERIAL,
    visit_id int,
    image_front varchar (255),
    image_back varchar (255),
    image_left varchar (255),
    image_right varchar (255),
    details varchar (255),
    PRIMARY KEY (id),
    FOREIGN KEY (visit_id)
      REFERENCES visits (id)
      ON DELETE CASCADE
  );`);

  await db.close();
}

module.exports = createTables;
