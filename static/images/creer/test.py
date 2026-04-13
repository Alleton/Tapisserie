from tkinter import *
# Création de la fenêtre principale
root = Tk()
root.title("Bouton avec Image")
root.geometry("400x300")
# Chargement de l'image
photo = PhotoImage(file="python.png")
# Création du bouton avec l'image
btn = Button(root,image=photo,command=lambda: print("Bouton cliqué!"))
btn.pack(pady=20)
# Boucle principale de l'application
root.mainloop()