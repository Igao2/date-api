<h1>Introduction</h1>
<p> This api is made for data diferences consults. justs that. really
</p>
<h2>
  Endpoints
</h2>
<h3>/diferencadatas</h3>
  <br>
Needs three arguments, with two optionals arguments h1 and h2
  <br>
  <ul>
                <li>datai: The initial data, in format dd/mm/yyyy</li><br>
                <li>dataf: The final data, in format dd/mm/yyyy</li><br>
                <li>h1: The initial hour, in the format HH:mm(optional)</li><br>
                <li>h2: The final hour, in the format HH:mm(optional) </li><br>
                <li>format: The format you want the return of JSON. There are many formats:<br><br>
                  <ul>
                    <li>YMdhm: returns a json contains the fields results for years,months,days,hours and minutes</li><br>
                    <li>dhm: return the diference in days,hours and minutes</li><br>
                    <li>YMd: returns the diference in years, months and the days </li><br>
                    <li>dhm: return the diference in days,hours and minutes</li><br>
                    <li>dh: return the diference in days and hours</li><br>
                    <li>dm: return the diference in days and minutes</li><br>
                    <li>hm: return the diference in days,hours and minutes</li><br>
                    <li>Y: returns just the years diference</li><br>
                    <li>M: returns just the months diference</li><br>
                    <li>d: returns just the days diference</li><br>
                    <li>h: returns just the hours diference</li><br>
                    <li>m: returns just the minutes diference</li><br>
                  </ul>
                  </li>
    </ul>
    <br>
    <h2>Examples</h2>
    <br>
    <p>In this example, we're using the query "?datai=22/03/2022&h1=22:10&dataf=22/04/2024&format=YMdhm"</p>
    ![image](https://github.com/user-attachments/assets/19f0904b-b5f8-4f5f-b8f0-fe35bd988ac7)
    <br><br>
    This return the diference between the date 22/03/2022 22:10 and 22/04/2024 00:00(observe that hours can be ignored, and the api will assume that you put 00:00) in years,months,days, hours and minutes.<br><br>
    ![image](https://github.com/user-attachments/assets/c2fd1da8-d3dc-4bd3-82dd-32adf309d80b)
    <br><br>
    <p>Anoter example, this time utilizing "format=dhm" and the same dates</p>

  
