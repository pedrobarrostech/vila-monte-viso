--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.6
-- Dumped by pg_dump version 9.6.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Banners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Banners" (
    id integer NOT NULL,
    name character varying(255),
    image character varying(255),
    "order" integer,
    active integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Banners" OWNER TO postgres;

--
-- Name: Banners_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Banners_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Banners_id_seq" OWNER TO postgres;

--
-- Name: Banners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Banners_id_seq" OWNED BY "Banners".id;


--
-- Name: Clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Clients" (
    id integer NOT NULL,
    name character varying(255),
    "lastName" character varying(255),
    rg character varying(255),
    cpf character varying(255),
    "maritalStatus" character varying(255),
    sex character varying(255),
    city character varying(255),
    address character varying(255),
    state character varying(255),
    phone character varying(255),
    facebook character varying(255),
    email character varying(255),
    birthday character varying(255),
    info character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Clients" OWNER TO postgres;

--
-- Name: Clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Clients_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Clients_id_seq" OWNER TO postgres;

--
-- Name: Clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Clients_id_seq" OWNED BY "Clients".id;


--
-- Name: Messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Messages" (
    id integer NOT NULL,
    title character varying(255),
    subject character varying(255),
    email character varying(255),
    phone character varying(255),
    message character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Messages" OWNER TO postgres;

--
-- Name: Messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Messages_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Messages_id_seq" OWNER TO postgres;

--
-- Name: Messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Messages_id_seq" OWNED BY "Messages".id;


--
-- Name: Products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Products" (
    id integer NOT NULL,
    name character varying(255),
    active integer,
    description character varying(255),
    link character varying(255),
    image character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Products" OWNER TO postgres;

--
-- Name: Products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Products_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Products_id_seq" OWNER TO postgres;

--
-- Name: Products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Products_id_seq" OWNED BY "Products".id;


--
-- Name: Schedules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Schedules" (
    id integer NOT NULL,
    title character varying(255),
    "clientId" integer,
    start timestamp with time zone NOT NULL,
    "end" timestamp with time zone NOT NULL,
    price double precision NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Schedules" OWNER TO postgres;

--
-- Name: Schedules_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Schedules_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Schedules_id_seq" OWNER TO postgres;

--
-- Name: Schedules_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Schedules_id_seq" OWNED BY "Schedules".id;


--
-- Name: Sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Sections" (
    id integer NOT NULL,
    name character varying(255),
    info character varying(255),
    description character varying(255),
    image character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Sections" OWNER TO postgres;

--
-- Name: Sections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Sections_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Sections_id_seq" OWNER TO postgres;

--
-- Name: Sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Sections_id_seq" OWNED BY "Sections".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE "SequelizeMeta" OWNER TO postgres;

--
-- Name: Services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Services" (
    id integer NOT NULL,
    name character varying(255),
    active integer,
    description character varying(255),
    link character varying(255),
    image character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Services" OWNER TO postgres;

--
-- Name: Services_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Services_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Services_id_seq" OWNER TO postgres;

--
-- Name: Services_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Services_id_seq" OWNED BY "Services".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Users" (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Users_id_seq" OWNED BY "Users".id;


--
-- Name: Banners id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Banners" ALTER COLUMN id SET DEFAULT nextval('"Banners_id_seq"'::regclass);


--
-- Name: Clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Clients" ALTER COLUMN id SET DEFAULT nextval('"Clients_id_seq"'::regclass);


--
-- Name: Messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Messages" ALTER COLUMN id SET DEFAULT nextval('"Messages_id_seq"'::regclass);


--
-- Name: Products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Products" ALTER COLUMN id SET DEFAULT nextval('"Products_id_seq"'::regclass);


--
-- Name: Schedules id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Schedules" ALTER COLUMN id SET DEFAULT nextval('"Schedules_id_seq"'::regclass);


--
-- Name: Sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Sections" ALTER COLUMN id SET DEFAULT nextval('"Sections_id_seq"'::regclass);


--
-- Name: Services id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Services" ALTER COLUMN id SET DEFAULT nextval('"Services_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Users" ALTER COLUMN id SET DEFAULT nextval('"Users_id_seq"'::regclass);


--
-- Data for Name: Banners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Banners" (id, name, image, "order", active, "createdAt", "updatedAt") FROM stdin;
1	Banner 1	uploads/thumbs/_iluwapes1bg.jpg	1	1	2018-01-12 14:58:14.82-02	2018-01-12 15:12:46.264-02
2	Banner 2 	uploads/thumbs/_rwxlkmpwjbg.jpg	2	1	2018-01-12 15:00:01.017-02	2018-01-12 15:13:27.781-02
\.


--
-- Name: Banners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Banners_id_seq"', 2, true);


--
-- Data for Name: Clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Clients" (id, name, "lastName", rg, cpf, "maritalStatus", sex, city, address, state, phone, facebook, email, birthday, info, "createdAt", "updatedAt") FROM stdin;
1	Pedro	Augusto	40464291-3	Pedro	Solteiro	M	Pedro	asduhasuhda	ashudasuhd	asuhdasuhduh	dsadsaudasu	sadhuasduhashud@sahudasuhd.com	2000-04-11	suhdhudasuhdasuh	2018-01-11 14:18:05.681-02	2018-01-11 14:18:05.681-02
\.


--
-- Name: Clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Clients_id_seq"', 1, true);


--
-- Data for Name: Messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Messages" (id, title, subject, email, phone, message, "createdAt", "updatedAt") FROM stdin;
12	dani	dani	dani	dani	dani	2018-01-16 10:02:07.756-02	2018-01-16 10:02:07.756-02
13	sadads	addasdasdas	dsd	dadsad	sadasdsadas	2018-01-16 10:03:47.971-02	2018-01-16 10:03:47.971-02
14	asdsadsa	dsadsad	sadsads	adsadsad	sadsadsa	2018-01-16 10:03:58.248-02	2018-01-16 10:03:58.248-02
\.


--
-- Name: Messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Messages_id_seq"', 14, true);


--
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Products" (id, name, active, description, link, image, "createdAt", "updatedAt") FROM stdin;
3	Camisa 1	1	Camisa 1	\N	uploads/thumbs/_wim144bsb1480359318003_1480359318003_tshirt_mockup_placeit.400x685.372_6_347_594.png	2018-01-12 16:07:51.611-02	2018-01-12 16:07:51.611-02
5	Camisa 3	1	Camisa 3	\N	uploads/thumbs/_yr7w4vupn1480359318003_1480359318003_tshirt_mockup_placeit.400x685.372_6_347_594.png	2018-01-12 16:08:55.615-02	2018-01-12 16:08:55.615-02
4	Camisa 2	1	Camisa 2	\N	uploads/thumbs/_p7oye2xyr1480359318003_1480359318003_tshirt_mockup_placeit.400x685.372_6_347_594.png	2018-01-12 16:08:12.376-02	2018-01-15 14:22:13.054-02
\.


--
-- Name: Products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Products_id_seq"', 5, true);


--
-- Data for Name: Schedules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Schedules" (id, title, "clientId", start, "end", price, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: Schedules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Schedules_id_seq"', 1, true);


--
-- Data for Name: Sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Sections" (id, name, info, description, image, "createdAt", "updatedAt") FROM stdin;
1	 Bem-vindo á Vila Monte Viso Pizzaria	By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally.	By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally.	uploads/thumbs/_mq51rfczv36382f6011ef4df744c94d4e2b298dc4.png	2018-01-11 16:29:58.385-02	2018-01-12 14:07:37.919-02
2	Pedro Henrique	By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally.	By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally.	uploads/thumbs/_i886r8o2ybg3.png	2018-01-12 15:59:29.583-02	2018-01-12 15:59:29.583-02
\.


--
-- Name: Sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Sections_id_seq"', 2, true);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "SequelizeMeta" (name) FROM stdin;
20161215131754-create-user-migration.js
20161215165843-create-schedule-migration.js
20161215165911-create-client-migration.js
20171130155345-create-message.js
20171221142504-create-banner.js
20180105165411-create-section.js
20180105165511-create-product.js
20180111130734-create-service.js
\.


--
-- Data for Name: Services; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Services" (id, name, active, description, link, image, "createdAt", "updatedAt") FROM stdin;
8	Criação	1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tempus quam. Nullam ornare finibus est, ac finibus arcu porttitor eu. 	\N	uploads/thumbs/_rxqj7f6jwundefined	2018-01-12 16:06:17.186-02	2018-01-16 11:31:12.246-02
9	Manutenção	1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tempus quam. Nullam ornare finibus est, ac finibus arcu porttitor eu. 	\N	uploads/thumbs/_hbky97mvoundefined	2018-01-12 16:06:39.753-02	2018-01-16 11:31:23.581-02
10	Cover-up	1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tempus quam. Nullam ornare finibus est, ac finibus arcu porttitor eu. 	\N	uploads/thumbs/_ts7ou81w8undefined	2018-01-16 11:33:09.624-02	2018-01-16 11:33:24.453-02
\.


--
-- Name: Services_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Services_id_seq"', 10, true);


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Users" (id, username, password, "createdAt", "updatedAt") FROM stdin;
1	artwork	250494	2018-01-11 07:29:40.005-02	2018-01-11 07:29:40.005-02
\.


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Users_id_seq"', 1, true);


--
-- Name: Banners Banners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Banners"
    ADD CONSTRAINT "Banners_pkey" PRIMARY KEY (id);


--
-- Name: Clients Clients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Clients"
    ADD CONSTRAINT "Clients_pkey" PRIMARY KEY (id);


--
-- Name: Messages Messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Messages"
    ADD CONSTRAINT "Messages_pkey" PRIMARY KEY (id);


--
-- Name: Products Products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);


--
-- Name: Schedules Schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Schedules"
    ADD CONSTRAINT "Schedules_pkey" PRIMARY KEY (id);


--
-- Name: Sections Sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Sections"
    ADD CONSTRAINT "Sections_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Services Services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Services"
    ADD CONSTRAINT "Services_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

