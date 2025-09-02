import {
    Avatar,
    Card
} from "@chakra-ui/react";

function HowWeWorkCard({icon, title, body}) {
    return (
        <Card.Root width={{md: "33%"}} border="none" boxShadow="-1px 2px 8px 0px rgba(0,0,0,0.1)">
            <Card.Body padding={{base: '25px 15px', lg: '60px 20px'}} gap={{
                base: '3',
                lg: '6'
            }} alignItems="center"
            >
                <Avatar.Root size="3xl" shape="rounded">
                    <Avatar.Image src={icon}/>
                </Avatar.Root>
                <Card.Title textAlign="center" fontSize={{base: '24px'}}>{title}</Card.Title>
                <Card.Description textAlign="center" fontSize={{base: "16px", lg: "18px"}}>
                    {body}
                </Card.Description>
            </Card.Body>
        </Card.Root>
    )
}

export default HowWeWorkCard;