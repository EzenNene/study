var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=9151bf7d6265bcf92d8e3f1d5c518a21"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

// 현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city) {
    var dataObj;
    var openWeatherAPI = url

    $.ajax({
        type: "GET", // 서버에 get 방식으로 요청
        url: openWeatherAPI += city, 
        dataType: "json", // 받아올 데이터 타입
        async: false,   // 비동기 X -> 동기(결과 데이터 리턴하기위해)
        success: function(data) { // API call 성공할 때
            dataObj =data
        },
        error: function(request, status, error) { // API call 실패할 때
            console.log(request, status, error)
        },
    })

    return dataObj

}

// getCurrentWeather()

// 지역별 온도 얻어오기

function getCurrentTemp(city) {

    var temp = {}
    var openWeatherAPI = url

    $.ajax({
        type: "GET", // 서버에 get 방식으로 요청
        url: openWeatherAPI += city, 
        dataType: "json", // 받아올 데이터 타입
        async: false,   // 비동기 X -> 동기(결과 데이터 리턴하기위해)
        success: function(data) { // API call 성공할 때
            temp.celsius = data.main.temp // 온도
            temp.icon = data.weather[0].icon // 아이콘
        },
        error: function(request, status, error) { // API call 실패할 때
            console.log(request, status, error)
        },
    })

    console.log(temp)
    return temp

}
