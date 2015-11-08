# Cookin up
I wanna cook up a gizoogle (http://gizoogle.net/) extension fo' Chrome... basically, it ghon be a on/off switch fo' automatic gizooglin of every last muthafuckin thang.  I aint talkin' bout chicken n' gravy biatch- dis shiznit ghon be straight-up bangin!

# Hustlin local
1. Clone dis repo
2. Hustle ta chrome://extensions
3. Enable developer mode
4. Load unpacked extension...

# Usin
1. Click Snoop Ta Tha D-O-Double-Gizzle ta gizooglize a site
2. Click Snoop Ta Tha D-O-Double-Gizzle again ta degizooglize

# TODO
- [x] Basic functionality
- [x] Work wit authenticated sites (usin textilizer)
  - Need ta git gizoogle.net ta git a cold-ass lil cert or find a HTTPS joint ta proxy through
- [ ] Work betta wit tabs
  - gizoogle likes ta open every last muthafuckin thang up in freshly smoked up tabs yo, but dis aint tracked by dis extension
- [ ] Find way to ignore classes/tags and fix fucked up UTF-8 shiznit
- [ ] Tranzizzle AJAX content on dynamic sites

# Log
- 11/1/15
  - Got basic functionalitizzle fo' chrome extension- can turn on/off on tab by tab basis
  - Basically, just chizzlez urls fo' all pages ta use http://gizoogle.net/tranzizzle.php
  - This works aiiiight yo, but itz pretty slow n' aint NEVER gonna work wit authenticated sites like facebook
- 11/7/15
  - Reworked chrome extension ta instead use AJAX n' http://gizoogle.net/textilizer.php
  - This works well except tha whole reason fo' changin over ta textilizer from tranzizzle was ta support sites you authenticated on... n' gizoogle.net aint gots HTTPS, so cannot AJAX ta gizoogle from HTTPS sites which was tha whole point of reworkin thangs
- 11/8/15
  - Got SSL cert n' nginx set up ta proxy gizoogle.net fo' me from mah own HTTPS site. This means dat dis extension cannot have end-to-end encryption n' should never be used wit anythang too sensitive... mostly, I just wanted ta try it up wit mah logged-in facebook page n' shiznit like dat though, not mah bank account so should be ok
  - Works well wit static sites yo, but right now every last muthafuckin thang basically breaks on mo' dynamic sites like facebook

