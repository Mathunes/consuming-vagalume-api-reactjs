import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const SearchContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 87px);
    padding: 20px;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    position: relative;

    h2 {
        padding: 10px 10vw 20px;
        font-size: 30px;
        font-weight: bold;
        color: #333333;

        @media (max-width: 600px) {
            padding: 10px 5vw 15px;
            font-size: 22px;
        }
    }

    li {
        padding: 10px 10vw;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 600px) {
            & {
                padding: 10px 5vw;
            }
        }

        h3 {
            background-color: #707070;
            color: #ffffff;
            font-size: 12px;
            padding: 3px;
            width: 35px;
            text-align: center;
            border-radius: 4px;
            margin-bottom: 10px;

            @media (max-width: 600px) {
                & {
                    font-size: 15px;
                }
            }
        }

        &:hover {
            background-color: #F1F1F1;
        }

        a {
            display: flex;
            text-decoration: none;
            color: #024B7B;

            @media (max-width: 600px) {
                & {
                    justify-content: space-between;
                }
            }

            &:hover {
                color: #041591;
            }

            p {
                margin: 0 10px 0 0;

                &:first-child {
                    &:after {
                        content: '-';
                        margin-left: 10px;

                        @media (max-width: 600px) {
                            & {
                                display: none;
                            }
                        }
                    }
                }

                @media (max-width: 600px) {
                    & {
                        font-size: 15px;
                    }
                }
            }    
    }

    
    }
`