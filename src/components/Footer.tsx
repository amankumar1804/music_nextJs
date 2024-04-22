// import React from 'react'
'use client'


const Footer = () => {
    return (
      <footer className="bg-black py-6">
        <div className="container mx-auto flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.57 18.37V10.2h2.94l.44-3.42H9.57l.002-1.72c0-.983.088-1.51 1.516-1.51h1.64V.592A22.053 22.053 0 0 0 10 0C4.64 0 1.98 3.32 1.98 9.35c0 3.24.965 5.46 2.74 7.08a5.062 5.062 0 0 0 1.97 1.33l-.02.02zM20 9.35c0-5.29-2.24-9.35-9.35-9.35C5.36 0 0 4.08 0 9.35c0 4.61 3.46 8.37 7.95 9.14v-6.37H5.63v-3.42h2.32V7.12c0-2.3 1.37-3.57 3.47-3.57 1.01 0 2.03.19 2.03.19v2.24h-1.14c-1.13 0-1.48.7-1.48 1.43v1.72h2.52l-.32 3.42h-2.2V18.5C16.65 17.99 20 14.03 20 9.35z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 18H5V9h3v9zm-1.5-10.5C6.12 7.5 7 6.62 7.5 6 8 5.5 8.93 5 10 5c1.25 0 2.23.5 3 1.5V9h-1.5c-1 0-1.5.62-1.5 1.5v6c0 .88.5 1.5 1.5 1.5H13v-3c0-.38.12-.62.38-.88.25-.25.62-.38 1-.38s.75.13 1 .38c.25.25.38.5.38.88v3h2.5c1 0 1.5-.62 1.5-1.5v-6c0-.88-.5-1.5-1.5-1.5H15V7.5c0-.88-.62-1.5-1.5-1.5-.62 0-1.12.5-1.5 1-.38.5-.5 1.12-.5 1.5V18H8v-9h-.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="mailto:youremail@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4M8 16l-4-4 4-4M16 16l4-4-4-4"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.262.82-.58 0-.287-.01-1.043-.015-2.045-3.338.724-4.042-1.61-4.042-1.61-.546-1.383-1.334-1.752-1.334-1.752-1.09-.744.082-.729.082-.729 1.205.086 1.838 1.236 1.838 1.236 1.07 1.836 2.806 1.305 3.49.998.108-.777.42-1.305.764-1.605-2.676-.305-5.482-1.338-5.482-5.952 0-1.316.465-2.385 1.235-3.227-.124-.303-.54-1.527.12-3.18 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.398 3-.405 1.02.007 2.04.138 3 .405 2.28-1.552 3.29-1.23 3.29-1.23.66 1.653.246 2.877.12 3.18.765.842 1.235 1.91 1.235 3.227 0 4.63-2.81 5.642-5.495 5.938.43.373.81 1.107.81 2.227 0 1.61-.015 2.906-.015 3.297 0 .322.21.699.825.579C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
