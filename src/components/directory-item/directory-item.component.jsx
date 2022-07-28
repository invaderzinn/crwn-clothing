import {Body, BackgroundImage, DirectoryItemContainer}from './directory-item.styles';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>l
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}


export default DirectoryItem