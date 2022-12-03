from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import  authenticate,login,logout
from app1.forms import CreateUserForm
from .forms import ContactForm
from django.contrib.auth.decorators import login_required
# Create your views here.
def home(request):
    return render(request, 'home.html')
def contact_us(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'success.html')
    form = ContactForm()
    context = {'form': form}
    return render(request, 'contact_us.html', context)
def Angry(request):
    return render(request, 'Angry.html')
def patience(request):
    return render(request, 'patience.html')
def disbelief(request):
    return render(request, 'disbelief.html')
def weak(request):
    return render(request, 'weak.html')
def lonely(request):
    return render(request, 'lonely.html')
def happy(request):
    return render(request, 'happy.html')
def depressed(request):
    return render(request, 'depressed.html')
def pillars(request):
    return render(request, 'pillars.html')
@login_required(login_url='login')
def Add_to_favourite(request):
    return render(request, 'Add_to_favourite.html')
   
def modules(request):
    return render(request, 'modules.html')
def module2(request):
    return render(request, 'module2.html')
def boys(request):
    return render(request, 'boys.html')
def girls(request):
    return render(request, 'girls.html')
def male(request):
    return render(request, 'male.html')
def female(request):
    return render(request, 'female.html')
def kalmas(request):
    return render(request, 'kalmas.html')


def register(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, 'Account was created for ' + user)
                return redirect('login')
        context = {'form':form}
        return render(request, 'register.html', context)
def loginpage(request):
    if request.user.is_authenticated:
        return redirect('home') 		
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password =request.POST.get('password')

            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'Username OR password is incorrect')
        context = {}
        return render(request, 'login.html', context)
def logoutUser(request):
	logout(request)
	return redirect('login')
def Duas(request):
    return render(request, 'Duas.html') 
def How_to_perform_prayer(request):
    return render(request, 'How_to_perform_prayer.html')
def How_to_perform_ablution(request):
    return render(request, 'How_to_perform_ablution.html')
def Names_of_ALLAH_and_Tasbeehat(request):
    return render(request, 'Names_of_ALLAH_and_Tasbeehat.html')
def islamic(request):
    return render(request, 'islamic.html')