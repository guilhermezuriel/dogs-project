import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginLost from './LoginLost';
import LoginReset from './LoginReset';

const Login = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LoginLost />} />
        <Route path="reset" element={<LoginReset />} />
      </Routes>
    </section>
  );
};

export default Login;
