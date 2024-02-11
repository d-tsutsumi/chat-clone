
CREATE TABLE public.organization (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE  public.role (
  id SERIAL START WITH 1 NOT NULL,
  name VARCHAR(50),
  PRIMARY KEY(id) 
);

CREATE TABLE  public.rooms (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT now(),
  organization_id UUID  REFERENCES organization(id),
  PRIMARY KEY (id)
);


CREATE TABLE  public.users (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  user_name varchar(100) NOT NULL,
  password varchar(255) NOT NULL,
  join_at TIMESTAMP NOT NULL DEFAULT now(),
  push_flag BOOLEAN NOT NULL DEFAULT false,
  role_id  SERIAL REFERENCES role(id),
  organization_id UUID  REFERENCES organization(id),
  PRIMARY KEY(id)
);


CREATE TABLE  public.messages (
  id SERIAL START WITH 1 NOT NULL ,
  create_at  TIMESTAMP NOT NULL DEFAULT now(), 
  message VARCHAR(300) NOT NULL,
  user_id UUID REFERENCES users(id),
  room_id UUID REFERENCES rooms (id),
  PRIMARY KEY (id),
);


SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'messages';


