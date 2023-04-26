import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";


import user from "./Profile/user";
import { Profile } from "./Profile/Profile";

import data from "./Statistics/data";
import { Statistics } from "./Statistics/Statistics";

import friends from "./FriendList/friends";
import { FriendList } from "./FriendList/FriendList";

import transactions from "./TransactionHistory/transactions";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <Layout>     
      <GlobalStyle />
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Layout>
  );
};