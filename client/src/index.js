import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './Router';
import { ChakraProvider } from '@chakra-ui/react'
import {QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"
import store from './store'
import { Provider } from 'react-redux';
import "antd/dist/antd";


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount:false,
      refetchOnWindowFocus:false,
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
);
