import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3001/';

export const goodsApi = createApi({
   reducerPath: 'goodsApi',
   tagTypes: ['Products'],
   baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
   endpoints: (build) => ({

     getGoods: build.query({
       query: (limit = '') => `goods${ limit && `?_limit=${limit}` }`,
       providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Products', id })),
             {type: 'Products',id: 'LIST'}, 
            ]
          : [{type: 'Products',id: 'LIST'}],
     }),

     addGoods: build.mutation({
        query: (body) => ({
          url: 'goods',
          method: 'POST',
          body
        }),
        invalidatesTags: [{type: 'Products',id: 'LIST'}]
     }),

     delGood: build.mutation({
        query: (body) => ({
          url: `goods/${body.id}`, 
          method: 'DELETE',
        }),
        invalidatesTags: [{ type: 'Products', id: 'LIST' }],
      }),
     

   }),
});

export const { useGetGoodsQuery , useAddGoodsMutation , useDelGoodMutation } = goodsApi; 