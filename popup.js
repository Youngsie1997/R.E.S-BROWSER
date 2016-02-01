function rand(min,max,interval)
{
  if(typeof(interval)==='undefined') interval = 1;
  var r = Math.floor(Math.random()*(max-min+interval)/interval);
  return r*interval+min;
}

document.addEventListener('DOMContentLoaded', function() {
  var Launchbutton = document.getElementById('launchRandom');
  Launchbutton.addEventListener('click', function() {
    var tvShow = document.getElementById('tv_show').value;
    var tvSeason = 1;
    var tvEpisode = 1;


    if(tvShow == "American Dad") //American Dad
    {
      tvShow = "american_dad"
      tvSeason = rand(1,12);

      switch(tvSeason)
      {
        case 1:
          tvEpisode = rand(1,23);
          break;
        case 2: case 3: case 6: case 7: case 8:
          tvEpisode = rand(1,19);
          break;
        case 4: case 5: case 9: case 10:
          tvEpisode = rand(1,20);
          break;
        case 11: case 12:
          tvEpisode = rand(1,15);
          break;
      }
    }

    else if(tvShow == "Bob's Burgers") //Bob's Burgers
    {
      tvShow = "bobs_burgers";
      tvSeason = rand(1,5);

      switch(tvSeason) //Tv Season
      {
        case 1:
          tvEpisode = rand(1,13);
          break;
        case 2:
          tvEpisode = rand(1,9);
          break;
        case 3: case 5:
          tvEpisode = rand(1,23);
          break;
        case 4:
          tvEpisode = rand(1,22);
          break;
      }
    }

    else if(tvShow == "Brooklyn Nine-Nine") //Brooklyn Nine-Nine
    {
      tvShow = "Brooklyn_Nine-Nine";
      tvSeason = rand(1,3);

      switch(tvSeason)
      {
        case 1:
          tvEpisode = rand(1,22);
          break;
        case 2:
          tvEpisode = rand(1,23);
          break;
        case 3:
          tvEpisode = rand(1,13);
          break;
      }
    }

    else if(tvShow == "Community")
    {
      tvShow = "community";
      tvseason = rand(1,6);

      switch(tvSeason)
      {
        case 1:
          tvEpisode = rand(1,25);
          break;
        case 2:
          tvEpisode = rand(1,24);
          break;
        case 3:
          tvEpisode = rand(1,22);
          break;
        case 4: case 5: case 6:
          tvEpisode = rand(1,13);
          break;
      }
    }

    else if(tvshow == "New Girl")
    {
      tvshow = "new_girl";
      tvSeason = rand(1,4);

      switch(tvshow)
      {
        case 1:
          tvEpisode = rand(1,24);
          break;
        case 2:
          tvEpisode = rand(1,25);
          break;
        case 3:
          tvEpisode = rand(1,23);
          break;
        case 4:


      }
    }


    window.open("http://thewatchseries.to/episode/"+tvShow+"_s"+tvSeason+"_e"+tvEpisode+".html")
  })
})
