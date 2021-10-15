import React from 'react';
import '../styles/Loading.css';

function Loading() {
    return (
      <div class="center">
        <div class="text">Carregando....</div>
        <div class="ring"></div>
      </div>
    );  
}

export default Loading;