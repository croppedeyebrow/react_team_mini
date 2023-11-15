import {Container, MenuTitle, MenuItem, Bar, MenuDetail} from "../../style-components/Store/Store-Menu";
import { useState, useEffect } from "react";
import { Axios } from "axios";
import AxiosApi from "../../../Api/AxiosApi";

const StoreMenu = () => {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
          try {
            const menu = await AxiosApi.storeMenu("storeId");
            console.logg(menu);
            if (menu.status === 200) {
                const menuData = menu.data.map((menu) => ({
                    STORE_ID: menu.storeId,
                    STORE_MENU: menu.storeMenu,
                    STORE_PRICE: menu.storePrice,
                }));
                setMenuData(menuData);
                setMenuData(false); // 메뉴 데이터를 상태 변수에 저장
            }
          } catch (error) {
            console.error('메뉴 데이터를 가져오지 못했습니다: ', error);
            setMenuData(false);
          }
        };
        fetchMenuData();
    }, []);

    return (
        <Container>
            <MenuTitle>메뉴</MenuTitle>
            <Bar />
            {menuData.map((menu, index) => (
                <>
                    <MenuItem key={index}>
                        <MenuDetail>{menu.name}</MenuDetail>
                        <MenuDetail>{menu.price}</MenuDetail>
                    </MenuItem>
                    <Bar />
                </>
          
            ))}
        </Container>
    );
};

export default StoreMenu;