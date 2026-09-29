export type Journey={id:string;name:string;theme:string;color:string;prompt:string;story:string};
export const JOURNEYS:Journey[]=[
{id:"roots",name:"Roots",theme:"Origins & identity",color:"#e0b84a",prompt:"Ask an elder where your surname began, and who first carried it.",story:"Every family starts somewhere. Roots maps where you come from and who you are."},
{id:"rasoi",name:"Rasoi",theme:"Recipes & traditions",color:"#6fa372",prompt:"Cook one ancestral recipe together and write down who taught it to whom.",story:"The kitchen is the family's oldest archive, kept in taste and touch."},
{id:"sur",name:"Sur",theme:"Music across generations",color:"#6b9be0",prompt:"Ask a grandparent for the song they sang first, then sing it back.",story:"Regional songs travel through voices long before they reach paper."},
{id:"chalachitra",name:"Chalachitra",theme:"Cinema & memories",color:"#d9727a",prompt:"Describe the first film you saw with family and who sat beside you.",story:"Films hold the memories of who we watched them with."},
{id:"kobita",name:"Kobita",theme:"Literature & language",color:"#a98bd6",prompt:"Read a handwritten letter or verse aloud in the language it was written.",story:"Words, letters and mother tongues carry what statistics cannot."},
{id:"itihash",name:"Itihash",theme:"Living history",color:"#5fb3b3",prompt:"Ask which moment in history your family lived through, and what they remember.",story:"History is not only in books. It is alive in the people at your table."}];
export const STEPS=[
["Receive","Every player receives a Family Passport."],
["Roll","Roll the heritage dice."],
["Move","Move across one of six cultural journeys."],
["Draw","Draw a Story Card."],
["Interact","Complete the real-life interaction."],
["Stamp","Everyone earns a Memory Stamp and progresses together."]];
export const PASSPORT=["Family Tree","Place of Origin","My Journey","Memory Stamps","Heritage Notes","Family Signatures"];
export const ATLAS=[
["Origins","Where the family name began"],["Migration","The journeys that moved the family"],["Letters","Handwritten words, kept and re-read"],
["Songs","Regional melodies passed by voice"],["Recipes","Flavours carried across borders"],["Festivals","The stories behind the celebrations"],["The Roots Circle","Every generation arrives together"]];
export const GENS=[["Grandparents","become storytellers."],["Parents","become bridges."],["Children","become explorers of identity."]];
export const KIT=["Circular Heritage Board","Family Passports","Roots Atlas","Story Cards","Memory Stamps","Wooden Dice & Pawns"];
