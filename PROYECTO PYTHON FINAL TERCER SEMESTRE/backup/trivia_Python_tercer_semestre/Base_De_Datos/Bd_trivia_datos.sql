PGDMP         ;                {         	   trivia_bd    15.2    15.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16440 	   trivia_bd    DATABASE     �   CREATE DATABASE trivia_bd WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE trivia_bd;
                postgres    false            �            1259    16442 	   preguntas    TABLE     �   CREATE TABLE public.preguntas (
    id integer NOT NULL,
    pregunta text NOT NULL,
    opcion1 text NOT NULL,
    opcion2 text NOT NULL,
    opcion3 text NOT NULL,
    respuesta text NOT NULL
);
    DROP TABLE public.preguntas;
       public         heap    postgres    false            �            1259    16441    preguntas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.preguntas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.preguntas_id_seq;
       public          postgres    false    215            �           0    0    preguntas_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.preguntas_id_seq OWNED BY public.preguntas.id;
          public          postgres    false    214            e           2604    16445    preguntas id    DEFAULT     l   ALTER TABLE ONLY public.preguntas ALTER COLUMN id SET DEFAULT nextval('public.preguntas_id_seq'::regclass);
 ;   ALTER TABLE public.preguntas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    16442 	   preguntas 
   TABLE DATA           W   COPY public.preguntas (id, pregunta, opcion1, opcion2, opcion3, respuesta) FROM stdin;
    public          postgres    false    215          �           0    0    preguntas_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.preguntas_id_seq', 15, true);
          public          postgres    false    214            g           2606    16449    preguntas preguntas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.preguntas
    ADD CONSTRAINT preguntas_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.preguntas DROP CONSTRAINT preguntas_pkey;
       public            postgres    false    215            �   �  x��U�n7<�|������Ð �e;p���C�ZqC�G|,$�M�:�K�쏥���V'H .�]�UŞ���M���\�����γrF9G�<'e�jۊ�#��/����5��#�*��I9�K$�E��9e/�0.�8�{��}|L�E;�bq���~���8?�����)/�W�	�đ]�\v'{�*�[U�u�S�;$�MTWŀU%�s5�׎�&U�S���dY�E0ɦŪ[��(�űLh�-��$�c1�C%�{��4P:R7�S�#��R%T�a��#�lǪF���N�_ �3������l ��iq�=��j�7�2�w=�ݳC�h���%"���k�����%sCy��7��q]<γ���!Z0u2=����R�S:LE�[s��!wf�w��1�mdPZjt~	q֤�6�.��P�F��5�q%�7�ߘ������m�H ��vq��C�	�X�ɛ���6o첸j&���%��f�#m����P�2i'�=�)M�Kު'r�+���%`Ǵ��r�}{rZv�;	�����5�*�ARrW���a
4БJj��A췊$���b �����D3B�{-Ծ�,�l�8B!��Z�m�maz=�\��A+sIn\)$�`Sm�����)�����)8iL%x]�a��4���T���f��E������+�'K�C7����f�<����}>իY#���]�2�&��>��*�ܽ8 {1郦1�$�T9��q�� �������+!И]HkrӀ�?�M~�m�-�V��u�c~���û�$�I�8M^��8\_�>�zH��`������=~(y��6Zo���'�M����������$\��H
�7��\������!X����զ~\�C� ^�4&���M��6�L���}m���e�*}8��o\2��     