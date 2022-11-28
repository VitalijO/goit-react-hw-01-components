import { Profile} from "./task1/Profile"
import user from "./task1/user.json";

import { StatisticsList } from "./task2/StatisticsList";
import data from "./task2/data.json"

import { FriendsList } from "./task3/FriendList";
import friends from "./task3/friends.json"


import { TransactionHistory } from "./task4/TransactionHistory";
import transactions from "./task4/transactions.json"

export const App = () => {
    return <div>
        <section className="task">
        <Profile user={user} />
        </section>
        <section className="task">
        <StatisticsList data={data} />
        </section>
        <section className="task">
        <FriendsList friends={friends} />
        </section>
        <section className="task">
        <TransactionHistory transactions={transactions} />
        </section>
    </div>
}
