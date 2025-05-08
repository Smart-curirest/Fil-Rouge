import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, Navigate } from "react-router-dom";
import { Container, Card, Alert, Button, Tab,Tabs, Row} from "react-bootstrap";
import { ArrowLeft, GeoAltFill } from "react-bootstrap-icons";
import LoadingScreen from "../components/LoadingScreen";
import NavBar from '../components/Navbar';
import ListLogement from '../components/ListLogement';
import UserUpdate from "../components/UserUpdate";



function UserPage() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [delError, setDelError] = useState("");
    const [error, setError] = useState(null);


    const [user] = useState(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
      });
    
      useEffect(() => {
        axios
          .get(`http://127.0.0.1:8000/api/posts/${id}`)
          .then(({ data }) => {
            setLogement(data);
            setLoading(false);
          })
          .catch((err) => {
            setError("Impossible de charger ce logement.");
            setLoading(false);
          });
      }, [id]);

      const handleDelete = async () => {
        if (!window.confirm("Confirmez-vous la suppression ?")) return;
        setDeleting(true);
        setDelError("");
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          });
          Navigate("/logement");
        } catch (err) {
          setDelError(
            err.response?.data?.message || "Erreur lors de la suppression."
          );
          setDeleting(false);
        }
      };  

      if (loading) {
        return (
          <Container className="text-center my-5">
            <LoadingScreen />
          </Container>
        );
      }
    
      if (error) {  
  return (
    <>
    <div>
    <Container fluid >
        <NavBar/>
    </Container>
    <Container>
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="profile" title="Historique">
        <h3>Historique des logements que vous avez consulté </h3>
        <Row><ListLogement/></Row>
      </Tab>
      <Tab eventKey="longer-tab" title="Parametres">
        <UserUpdate/>
      </Tab>

    </Tabs>  
    </Container>
    </div>
    </>
  )}
}

export default UserPage