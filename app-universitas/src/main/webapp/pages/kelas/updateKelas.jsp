<%-- 
    Document   : addKelas
    Created on : Sep 25, 2017, 10:22:20 AM
    Author     : dimmaryanto93
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Form Kelas</h1>
        <!--${pageContext.servletContext.contextPath}-->
        <form action="${pageContext.servletContext.contextPath}/kelas/update" method="post">
            
            <input type="hidden" value="${k.id}" name="kelasId">
            <div>
                <label for="kelasName">Nama Kelas</label>
                <input type="text" name="kelasName" id="kelasName" value="${k.nama}">
            </div>
            <div>
                <label for="kelasAngkatan">Angkatan</label>
                <input type="number" name="kelasAngkatan" id="kelasAngkatan" value="${k.angkatan}">
            </div>
            <div>
                <button type="submit">Kirim</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    </body>
</html>
