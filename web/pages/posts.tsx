'use client'
import React from "react";



export default function Posts() {
    const posts = [
      { id: '1', title: 'Post One' },
    ];
  
    return (
      <div className="h-screen w-full bg-amber-800">
        {posts.map((post) => (
          <p>--- </p>
        ))}
      </div>
    );
  };

 
 
  