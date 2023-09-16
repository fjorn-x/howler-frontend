import React from "react";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import {Avatar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Verified from "@mui/icons-material/Verified";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreButton from "../Extra/MoreButton";

const HowlCard = () => {
  const navigate = useNavigate();

  const handleOpenReplyModal = () => {
    console.log("open reply modal");
  };
  const handleCreateRetweet = () => {
    console.log("create retweet");
  };
  const handleLikeTweet = () => {
    console.log("like tweet");
  };
  return (
    <div className="border p-3 pr-3">
      <div className="flex space-x-5">
        <Avatar
          className="cursor-pointer"
          alt="username"
          src="images/profile.jpeg"
          onClick={() => navigate(`/${5}`)}
        />
        <div className="w-full">
          <div className="flex justify-between items-start">
            <div className="flex cursor-pointer  space-x-1" onClick={() => navigate(`/${5}`)}>
              <span className="font-semibold">Hamza Shaikh</span>
              <Verified className="text-[#b91c1c]" />
              <span className="text-gray-600">@hamzashaikh &#183; 2m</span>
            </div>
            <MoreButton />
          </div>
          <div>
            <div className="cursor-pointer" onClick={() => navigate(`/${5}`)}>
              <p className="mb-2 p-0 w-full">
                AMD GPU+CPU GIVEAWAY!! @AMD created 500 Limited Edition @StarfieldGame Radeon™ RX
                7900 XTX and Ryzen™ 7 7800X3D processor gift packs and partnered with me to give one
                away! #GameOnAMD #AMDPartner How to enter: ✅Follow @Average_Jonas ✅Like & repost
                ✅Tag 2 friends Winner will be announced Sept. 20!
              </p>
              <img
                src="images/profile.jpeg"
                alt=""
                className="w-full border border-gray-400 p-5 rounded-md"
              />
            </div>
          </div>
          <div className="py-2 flex flex-wrap justify-between items-center">
            <div className="space-x-3 flex items-center text-gray-600">
              <ChatBubbleOutlineOutlinedIcon
                className="cursor-pointer"
                onClick={handleOpenReplyModal}
                fontSize="small"
              />
              <p>43</p>
            </div>
            <div
              className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}
            >
              <RepeatOutlinedIcon
                className="cursor-pointer"
                onClick={handleCreateRetweet}
                fontSize="small"
              />
              <p>54</p>
            </div>
            <div
              className={`${false ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}
            >
              {false ? (
                <FavoriteOutlinedIcon
                  className="cursor-pointer"
                  onClick={handleLikeTweet}
                  fontSize="small"
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  className="cursor-pointer"
                  onClick={handleLikeTweet}
                  fontSize="small"
                />
              )}
              <p>54</p>
            </div>
            <div className="space-x-3 flex items-center text-gray-600">
              <BarChartOutlinedIcon
                className="cursor-pointer"
                onClick={handleOpenReplyModal}
                fontSize="small"
              />
              <p>430</p>
            </div>
            <div className="space-x-3 flex items-center text-gray-600 mr-2">
              <FileUploadOutlinedIcon
                className="cursor-pointer "
                onClick={handleOpenReplyModal}
                fontSize="small"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowlCard;
