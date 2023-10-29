import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export default function Home() {
  return (
    <Container>
      <Link href="/button-list">/button-list</Link>
      <Link href="/file-upload">/file-upload</Link>
    </Container>
  );
}
