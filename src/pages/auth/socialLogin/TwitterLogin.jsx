import React from 'react'
import { FaTwitter } from "react-icons/fa";

const TwitterLogin = () => {
  return (
    <div>
        <div
                className="twitter p-3 bg-white text-blue-500 text-lg cursor-pointer rounded-lg hover:bg-gray-200 hover:text-blue-600 hover:text-xl"
                title="Twitter Login"
              >
                <FaTwitter />
              </div>
    </div>
  )
}

export default TwitterLogin
