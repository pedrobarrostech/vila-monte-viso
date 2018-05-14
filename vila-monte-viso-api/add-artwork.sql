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