import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokeTeamAPI = createApi({
  reducerPath: "poke",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/"}),
  endpoints: (builder) =>({
    getAllTeams: builder.query({
      query: (name) => 'allteams',
      keepUnusedDataFor: 1
    }),
    getPokeById: builder.query({
      query: (id) => ({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
      })
    }),
    getPokeByUrl: builder.query({
      query: (url) => ({
        url: url
      })
    }),
    getListOfPokemons: builder.query({
      query: (start) => ({
        url: `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${start - 1}`
      })
    }),
    postTeam: builder.mutation({
      query: (post) => ({
        url: 'createteam',
        method: 'POST',
        body: post
      })
    }),
    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: 'DELETE',
      })
    }),
  })
});

export const { useGetAllTeamsQuery, useGetPokeByIdQuery, useGetListOfPokemonsQuery,useGetPokeByUrlQuery, usePostTeamMutation, useDeleteTeamMutation } = pokeTeamAPI

