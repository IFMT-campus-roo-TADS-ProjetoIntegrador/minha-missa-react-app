import styled from 'styled-components';

export const Container = styled.div`
    margin: 120px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    #login-container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 300px;
        height: 400px;
    };
    .form-floating{
        padding-bottom: 14px;
    }
    .logo-minha-missa{
        width: 200px;
        margin-bottom: 25px;
    }

    .icon{
        margin-right: 2px;
        color: #0d6efd;
    }
`;