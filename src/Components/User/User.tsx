import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserImagePost from "./UserImagePost";
import UserStats from "./UserStats";
import NotFound from "../NotFound";
import Head from "../Helpers/Head";

const User = () => {
  const { data } = React.useContext(UserContext);

  if (!data) return null;

  return (
    <section className="container">
      <Head title="My Account" description="" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserImagePost />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
