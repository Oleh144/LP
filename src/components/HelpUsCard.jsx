import {
    Avatar, Button,
    Card, Heading, Link, Tag
} from "@chakra-ui/react";

function HowWeWorkCard({title, body, badge, dateApply}) {
    return (
        <Card.Root width={{md: "33%"}} border="none" rounded="16px" boxShadow="-1px 2px 8px 0px rgba(0,0,0,0.1)">
            <Card.Body padding={{base: '15px 15px 23px', lg: '15px 20px 23px'}} gap={{
                base: '3',
                lg: '4'
            }}
            >
                <Card.Title mt="2" as={Heading} lineHeight="1.5rem">{title}</Card.Title>
                <Card.Description fontSize="16px" fontFamily="Libre Bodoni">
                    {body}
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="space-between" padding={{base: '0 15px 23px', lg: '0 20px 23px'}}>
                <Tag.Root bg="secondary" color="white" rounded="full" padding="8px">
                    <Tag.Label fontSize="16px" wordSpacing="7px">{badge}</Tag.Label>
                </Tag.Root>
                <Tag.Root>
                    <Link wordSpacing="7px" fontFamily="Libre Bodoni">{dateApply}</Link>
                </Tag.Root>
            </Card.Footer>
        </Card.Root>

    )
}

export default HowWeWorkCard;