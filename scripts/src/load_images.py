'''
Created on 28 févr. 2026

@author: jf
'''
import os

def parse( ):
    """
    Liste récursivement le contenu des sous-répertoires
    """
    path = os.getcwd() 
    for f in os.listdir(path):
        if os.path.isdir(f): # si f est un dossier
            print( "** " + f)
            os.chdir(f) # On va lister son contenu
            parse()
            os.chdir('../') # On revient au répertoire précédent
        else:
            # Traitement sur le fichier f
            # print( os.path.split(path)[1] + "," + f)
            # print( os.path.splitext(f))
            if os.path.splitext(f)[1]     == ".png" :
                texte = os.path.splitext(f)[0]   + ",1000 , 50 , 0 , "  + "static/images/" +  os.path.basename(path) + "/" + f + ",2026-01-01 17:27:59" 
                print(texte, file = csv)
                
                
                # print( os.path.basename(path) + "," + f , file = csv)
            

if __name__ == '__main__':
    pass

print('load images')

source = "C:\\Users\\jf\\Bayeux\\static\\images"
# Changer le répertoire de travail courant
os.chdir(source)
print (os.getcwd() )
with open("C:\\Users\\jf\\Bayeux\\static\\images\\images.csv", "w") as csv:
    print("name,positiopnx, y , z, imaage , date" ,file=csv)
    parse()
