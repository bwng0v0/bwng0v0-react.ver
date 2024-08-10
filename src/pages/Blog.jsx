import styled from "styled-components";
import Post from "../components/Post";
import { Link } from "react-router-dom";

const list = [
    {title:'Supabase에서 Kakao Login JS SDK를 사용하는 방법', summary:'Supabase에서 Kakao OIDC를 사용해서 카카오 로그인하기', date:'2024-07-07', path:'#', },
    {title:'Supabase에서 Kakao Login JS SDK를 사용하는 방법', summary:'Supabase에서 Kakao OIDC를 사용해서 카카오 로그인하기', date:'2024-07-07' },
    {title:'Supabase에서 Kakao Login JS SDK를 사용하는 방법', summary:'Supabase에서 Kakao OIDC를 사용해서 카카오 로그인하기', date:'2024-07-07' },
    {title:'Supabase에서 Kakao Login JS SDK를 사용하는 방법', summary:'Supabase에서 Kakao OIDC를 사용해서 카카오 로그인하기', date:'2024-07-07' },
    {title:'Supabase에서 Kakao Login JS SDK를 사용하는 방법', summary:'Supabase에서 Kakao OIDC를 사용해서 카카오 로그인하기', date:'2024-07-07' },  
];

export default function Blog() {
    return (
        <Container>
        <Contents>
            {list.map((O)=>(
                <ContentBox>
                <Left>
                    <Title>{O.title}</Title>
                    <Text>{O.summary}</Text>
                    <Date>{O.date}</Date>
                </Left>
                <Right></Right>
            </ContentBox>
        ))}
        </Contents>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const Contents = styled.div`
    max-width: 800px;
    height: 1000px;
    border-left: 1px solid #e5e7eb;
    border-right:1px solid #e5e7eb;
    margin: 0 auto;
`

const ContentBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px;
    box-sizing: border-box;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Title = styled.h3`

`
const Text = styled.p`
    
`
const Date = styled.p`
    
`
const Right = styled.div`
    width: 8rem;
    height: 6rem;
    background-color: gray;
    border-radius: 5px;
`