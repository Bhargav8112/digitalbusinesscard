import { Card } from "react-bootstrap";
import SocialCard from "./SocialCard";

export default function SocialList({ socials }) {
  return (
     
      <Card className="border-2 shadow-sm " style={{ width: "100%" ,    paddingTop: "20%;"}}>
        <Card.Body className="p-0">

          {/* Title */}
          <div className="text-center text-uppercase text-muted fw-semibold small py-3 border-bottom">
            Our Social Networks
          </div>

          {/* Rows */}
          {socials.map((item) => (
            <SocialCard key={item.id} {...item} />
          ))}

        </Card.Body>
      </Card>
    
  );
}
