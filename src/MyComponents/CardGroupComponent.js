import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardGroupComponent() {
  return (
    <CardGroup style={{padding : ' 70px 20px '}}>
      <Card style={{ backgroundColor: 'gainsboro',  padding : ' 0px 30px' , alignItems: 'center'}}>
        <Card.Img   style={{ padding : '20px', width: '20rem' , height: '20rem'}} variant="top" src="https://zeptosystems.com/wp-content/uploads/2018/10/java-1.jpg" />
        <Card.Body style={{ width: '20rem' , height: '15rem' , textAlign: 'center'}}>
          <Card.Title>Java Fundamentals</Card.Title>
          <Card.Text>
          This Java programming tutorial is designed for beginners as well experienced professionals.
           Whether you are looking to learn the basics of Java or its advanced concepts, our Java tutorial
            is the perfect resource for you.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{backgroundColor: 'gainsboro', padding : ' 0px 30px',alignItems: 'center' }}>
        <Card.Img  style={{ padding : '20px', width: '20rem', height :'20rem' }} variant="top" src="https://www.novatia.com/hubfs/Blog_Page/cyber-security%20(original).jpg#keepProtocol" />
        <Card.Body style={{ width: '20rem' , height: '15rem', textAlign: 'center'}}>
          <Card.Title>CyberSecurity</Card.Title>
          <Card.Text>
          Cybersecurity is the way to prevent servers, devices, electronic systems, and networks from digital attacks, and damage.
           It is essential for the integrity of data and systems in every field where data is present. Various forms of cybersecurity
            threats includes virus, worms, malware and hacking. {' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{backgroundColor: 'gainsboro', padding : ' 0px 30px', alignItems: 'center' }}>
        <Card.Img  style={{ padding : '20px', width: '20rem' ,  height: '20rem'}} variant="top" src="https://usamagazine.net/wp-content/uploads/2021/04/sql-database.jpg" />
        <Card.Body style={{ width: '20rem' , height: '15rem', textAlign: 'center'}}>
          <Card.Title>Database Management</Card.Title>
          <Card.Text>
          A Database Management System (DBMS) is a software system that is designed to manage and organize data in a structured manner.
           It allows users to create, modify, and query a database, as well as manage the security and access controls for that database.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default CardGroupComponent;