import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getSubscribers, unsubscribe } from "../api/api";
import Button from "react-bootstrap/Button";

interface subscribersInteface {
  userid: string;
  city: string;
}

const Tables = () => {
  const [Subscribers, setSubscribers] = useState<subscribersInteface[]>([]);

  useEffect(() => {
    const getAllSubscribers = async () => {
      const subscribers = await getSubscribers();

      console.log(subscribers);

      const allsubs = subscribers.map((subs: any) => {
        return { userid: subs._id, city: subs.city };
      });

      setSubscribers(allsubs);
    };

    getAllSubscribers();
  }, []);

  const handleChange = async (e: React.MouseEvent, userId: string) => {
    const res = await unsubscribe(userId);
    if (res === 200) {
      alert("User unsubscribed successfully");
    }
    
    setSubscribers((prev) => {
      return prev.filter((subs) => subs.userid !== userId);
    });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr className="text-center">
          <th>User ID</th>
          <th>City</th>
          <th>Subscription</th>
        </tr>
      </thead>
      <tbody>
        {Subscribers
          ? Subscribers.map((subs: any) => {
              return (
                <tr key={subs.userid}>
                  <td>{subs.userid}</td>
                  <td>{subs.city}</td>
                  <td>
                    <Button
                      onClick={(e) => handleChange(e, subs.userid)}
                      variant="secondary"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })
          : ""}
      </tbody>
    </Table>
  );
};

export default Tables;
