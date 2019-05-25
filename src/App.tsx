import React from 'react';
import './App.css';
import { TodoListApp } from './container/TodoListApp';
import Layout from './shared/layouts/Layout';

const App: React.FC = () => {
    return (
        <Layout>
            <TodoListApp></TodoListApp>
        </Layout>
    )
};

export default App;
