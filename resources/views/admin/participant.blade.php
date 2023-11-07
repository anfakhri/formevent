<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <table>
        @foreach ($participant as $item)
        <tr>
            <td>{{$item->name}}</td>
        </tr>
        <tr>
            <td>{{$item->email}}</td>
        </tr>
        <tr>
            <td>{{$item->phone}}</td>
        </tr>
        @endforeach
    </table>
</body>

</html>