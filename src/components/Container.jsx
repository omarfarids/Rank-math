import styled from 'styled-components'


const ContainerLayout = styled.div`
    height:${props=>props.coHeight || 'fit-content'};
    width:${props=>props.coWidth || 'fit-content'};
    border-radius:${props=>props.radias || '10px'};
    filter: drop-shadow(0px 59px 55.5px rgba(154,155,176,0.17));
    background-color: #ffffff;
`

const Container = ({children,coHeight,coWidth,radias ,className}) => {
    return <ContainerLayout className={className} coHeight={coHeight} coWidth={coWidth} radias={radias}>
        {children}
    </ContainerLayout>
}

export default Container