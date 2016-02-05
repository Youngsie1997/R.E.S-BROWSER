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


    if(tvShow == "american_dad") //American Dad
    {
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

    else if(tvShow == "baby_daddy")
    {
      tvSeason = rand(1,4);
      switch(tvSeason)
      {
        case 1:
          tvEpisode = rand(1,10);
          break;
        case 2:
          tvEpisode = rand(1,19);
          break;
        case 3:
          tvEpisode = rand(1,21);
          break;
        case 4:
          tvEpisode = rand(1,22);
          break;
      }
    }

    else if(tvShow == "bobs_burgers") //Bob's Burgers
    {
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

    else if(tvShow == "Brooklyn_Nine-Nine") //Brooklyn Nine-Nine
    {
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

    else if(tvShow == "community") //Community
    {
      tvSeason = rand(1,6);
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

    else if(tvShow == "family_guy") //Family Guy
    {
      tvSeason = rand(1,14);
      switch(tvSeason)
      {
        case 1:
          tvEpisode = rand(1,7);
          break;
        case 2: case 8: case 12:
          tvEpisode = rand(1,21);
          break;
        case 3: case 11:
          tvEpisode = rand(1,22);
          break;
        case 4:
          tvEpisode = rand(1,30);
          break;
        case 5: case 9: case 13:
          tvEpisode = rand(1,18);
          break;
        case 6:
          tvEpisode = rand(1,12);
          break;
        case 7:
          tvEpisode = rand(1,16);
          break;
        case 10:
          tvEpisode = rand(1,23);
          break;
        case 14:
          tvEpisode = rand(1,12);
          break;
      }

    }

    else if(tvShow == "new_girl") //New Girl
    {
      tvSeason = rand(1,4);
      switch(tvSeason)
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
          tvEpisode = rand(1,22);
          break;
      }
    }

    else if(tvShow == "rick_and_morty") //Rick And Morty
    {
      tvSeason = rand(1,2);
      switch(tvSeason)
      {
        case 1:
          tvEpisode = rand(1,11);
          break;
        case 2:
          tvEpisode = rand(1,10);
          break;
      }
    }

    else if(tvShow == "south_park")
    {
      tvSeason = rand(1,19);
      switch(tvSeason)
      {
        case 1:
          tvEpisode = rand(1,13);
          break;
        case 2:
          tvEpisode = rand(1,18);
          break;
        case 3: case 4: case 6:
          tvEpisode = rand(1,17);
          break;
        case 5: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16:
          tvEpisode = rand(1,14);
          break;
        case 7:
          tvEpisode = rand(1,15);
          break;
        case 17: case 18: case 19:
          tvEpisode = rand(1,10);
          break;
      }
    }

    else if(tvShow == "the_simpsons")
    {}
    window.open("http://thewatchseries.to/episode/"+tvShow+"_s"+tvSeason+"_e"+tvEpisode+".html")
  })
})
